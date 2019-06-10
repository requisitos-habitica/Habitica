import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarItensGemasLoja = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar itens com gemas na Loja" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica Itens'>Utilizar Loja</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar qualquer item na <Link to='/Loja'>loja</Link> utilizando <Link to='/Gema'>gemas</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir <Link to='/Gema'>gemas</Link></li>
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
        <li><Link to='/Gema'>gemas</Link></li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário <Link to='/Comprar gema V1'>compra Gemas</Link></li>
        <li>O usuário acessa a <Link to='/Loja'>loja</Link></li>
        <li>O usuário avalia o preço do item</li>
        <li>O usuário compara o preço do item com seu saldo de <Link to='/Gema'>gemas</Link></li>
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
        <li>O usuário não possui <Link to='/Gema'>gemas</Link> suficientes para comprar o item desejado</li>
      </ul>
    </Card>

  </div>
)

export default ComprarItensGemasLoja