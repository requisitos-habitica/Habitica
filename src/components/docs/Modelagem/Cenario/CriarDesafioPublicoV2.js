import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'
import CriarDesafioPublicoV1 from '../Cenario/CriarDesafioPublicoV1'

const CriarDesafioPublicoV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ [CriarDesafioPublicoV1] } rastreability={ null }
                  title="Criar desafio público V2" author="Kaique Borges e Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Criar um <Link to = '/Desafio'>Desafio</Link> que seja público para qualquer usuário visualizar ou participar</p>
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
        <li>Usuários</li>
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
        <li>Usuário clica em "criar desafio"</li>
        <li>Usuário digita informações do desafio</li>
        <li>Usuário salva o <Link to = '/Afazer' >afazer</Link></li>
        <li>Usuário adiciona <Link to = '/Tarefa' >tarefas</Link> do <Link to = '/Desafio' >desafio</Link></li>
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

export default CriarDesafioPublicoV2