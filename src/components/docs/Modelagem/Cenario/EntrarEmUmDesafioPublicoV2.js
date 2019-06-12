import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EntrarEmUmDesafioPublicoV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Entrar em um desafio público V2" author="Kaique Borges e Pedro Féo"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/Entrar em um desafio público V1'>V1</Link></p>
    </Card>

    <Card>
      <h2>Objetivo</h2>
      <p>Participar de um <Link to='/Desafio'>Desafio</Link> público</p>
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
        <li><Link to='/Categoria'>Categorias</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário clica em "encontre <Link to='/Desafio'>Desafio</Link>"</li>
        <li>Usuário o faz uma busca por texto (opcional)"</li>
        <li>Usuário filtra os <Link to='/Desafio'>Desafios</Link> por <Link to='/Categoria'>Categoria</Link> (opcional)</li>
        <li>Usuário clica no título do <Link to='/Desafio'>Desafio</Link></li>
        <li>Usuário clica em "se juntar ao <Link to='/Desafio'>Desafio</Link>"</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Usuário escolher um <Link to='/Desafio'>Desafio</Link> que não consegue cumprir</li>
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

export default EntrarEmUmDesafioPublicoV2