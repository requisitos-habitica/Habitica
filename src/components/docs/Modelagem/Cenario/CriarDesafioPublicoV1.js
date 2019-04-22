import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CriarDesafioPublicoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Criar desafio público" author="Kaique Borges"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Comprar qualquer item na loja utilizando moedas ou gemas</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Local: Tela Desafios</li>
        <li>Tempo: Em qualquer momento</li>
        <li>Pré-condição: Usuário deve estar logado</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuários que queiram criar uma competição em cima de algum objetivo</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Gemas - prêmio do desafio</li>
        <li>Moedas - indiretamente, através das tarefas do desafio</li>
        <li>Saúde - indiretamente, através das tarefas do desafio</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app</li>
        <li>Usuário clica em "desafios"</li>
        <li>Usuário clica em "criar desafio"</li>
        <li>Usuário digita informações do desafio</li>
        <li>Usuário salva o afazer</li>
        <li>Usuário adiciona tarefas do desafio</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário não descrever bem o desafio</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter 1 (uma) ou mais Gemas para servirem de prêmio do desafio</li>
      </ul>
    </Card>
  </div>
)

export default CriarDesafioPublicoV1