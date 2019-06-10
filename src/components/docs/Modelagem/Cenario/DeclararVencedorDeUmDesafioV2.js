import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DeclararVencedorDeUmDesafioPublicoV2 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Declarar o vencedor de um desafio V2" author="Kaique Borges e Pedro Féo"/>

    <Card>
      <h2>Versionamento</h2>
      <p><Link to='/Declarar o vencedor de um desafio V1'>V1</Link></p>
    </Card>
    <Card>
      <h2>Objetivo</h2>
      <p>Criador de um <Link to = '/Desafio'>Desafio</Link> declara o vencedor do <Link to = '/Desafio'>Desafio</Link></p>
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
        <li>Usuários participantes do <Link to = '/Desafio'>Desafio</Link></li>
        <li>Usuário criador do <Link to = '/Desafio'>Desafio</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link to = '/Desafio'>Desafio</Link></li>
        <li><Link to = '/Categoria'>Categorias</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário o faz uma busca por texto (opcional)</li>
        <li>Usuário filtra os <Link to = '/Desafio'>Desafios</Link> por <Link to = '/Categoria'>Categorias</Link> (opcional)</li>
        <li>Usuário clica no título do <Link to = '/Desafio'>Desafio</Link></li>
        <li>Usuário clica em "selecione um participante"</li>
        <li>Usuário pesquisa nome do participante (opcional)</li>
        <li>Usuário clica no nome do participante</li>
        <li>Usuário clica em "Vencedor do <Link to = '/Desafio'>Desafio</Link>"</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <Link to = '/Desafio'>Desafio</Link> deve possuir participantes
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não ser o criador do <Link to = '/Desafio'>Desafio</Link></li>
      </ul>
    </Card>

  </div>
)

export default DeclararVencedorDeUmDesafioPublicoV2