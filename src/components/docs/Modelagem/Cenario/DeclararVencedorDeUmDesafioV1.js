import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const DeclararVencedorDeUmDesafioPublicoV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Declarar o vencedor de algum desafio e dar o prêmio ao mesmo" author="Kaique Borges"/>
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
        <li>Usuários participantes do desafio</li>
        <li>Usuário criador do desafio</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Conexão com a internet</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário abre o app</li>
        <li>Usuário clica em "desafios"</li>
        <li>Usuário o faz uma busca por texto (opcional)</li>
        <li>Usuário filtra os desafios por categoria (opcional)</li>
        <li>Usuário clica no título do desafio</li>
        <li>Usuário clica em "selecione um participante"</li>
        <li>Usuário pesquisa nome do participante (opcional)</li>
        <li>Usuário clica no nome do participante</li>
        <li>Usuário clica em "Vencedor do desafio"</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>O usuário não ser o criador do desafio</li>
      </ul>
    </Card>

  </div>
)

export default DeclararVencedorDeUmDesafioPublicoV1