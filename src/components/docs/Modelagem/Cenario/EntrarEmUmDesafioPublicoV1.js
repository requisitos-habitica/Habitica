import React from 'react'
import { Link } from 'react-router-dom'

const EntrarEmUmDesafioPublicoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Entrar em um desafio público" author="Kaique Borges"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Participar de um desafio público</p>
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
        <li>Usuários que queiram participar uma competição em cima de algum objetivo</li>
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
        <li>Usuário clica em "encontre desafio"</li>
        <li>Usuário o faz uma busca por texto (opcional)"</li>
        <li>Usuário filtra os desafios por categoria (opcional)</li>
        <li>Usuário clica no título do desafio</li>
        <li>Usuário clica em "se juntar ao desafio"</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário escolher um desafio que não consegue cumprir</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter uma conta</li>
      </ul>
    </Card>

  </div>
)

export default EntrarEmUmDesafioPublicoV1