import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const VerProgressoDePArticipantesDeUmDesafioV1 = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Ver o progresso de outros participantes de algum desafio" author="Kaique Borges"/>
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
        <li>Usuário comum</li>
        <li>Usuários participantes do desafio</li>
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
        <li>Usuário clica em desafios</li>
        <li>Usuário clica em "encontre desafio"</li>
        <li>Usuário o faz uma busca por texto (opcional)"</li>
        <li>Usuário filtra os desafios por categoria (opcional)</li>
        <li>Usuário clica no título do desafio</li>
        <li>Usuário clica em "selecione um participante"</li>
        <li>Usuário pesquisa nome do participante (opcional)</li>
        <li>Usuário clica no nome do participante</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        Nenhuma
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Usuário não ter uma conta</li>
        <li>O desafio não ter participantes</li>
      </ul>
    </Card>

  </div>
)

export default VerProgressoDePArticipantesDeUmDesafioV1