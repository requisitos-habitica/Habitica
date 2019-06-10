import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const ComprarEquipamentoLoja = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Comprar missões na Loja" author="Lucas Dutra"/>

    <Card>
        <h2>Versionamento</h2>
        <p><Link to='/Utilizar a loja do Habitica Missão'>Utilizar Loja</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Comprar missões na loja </p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, o usuário deve possuir moedas ou gemas, o usuário deve estar no nível requerido pela missão</li>
        <li>Local: Loja do habitica, aba missões</li>
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
        <li>Gemas</li>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>O usuário ganha moedas ou compra gemas</li>
        <li>O usuário acessa a loja</li>
        <li>O usuário avalia o preço da missão</li>
        <li>O usuário compara o preço da missão com seu saldo</li>
        <li>O usuário lê qual o objetivo da missão</li>
        <li>O usuário avalia a dificuldade da missão</li>
        <li>O usuário avalia quais são as recompensas da missão</li>
        <li>O usuário compra a missão</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>A recompensa da missão não interessa o usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não possui moedas ou gemas suficientes para comprar o equipamento desejado</li>
        <li>O usuário não está no nível requerido pela missão</li>
      </ul>
    </Card>

  </div>
)

export default ComprarEquipamentoLoja